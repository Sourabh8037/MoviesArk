import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { fetchSelectedPerson } from '../store/actions';
import PersonBiography from '../components/People/PersonBiography';
import Casting from '../components/People/Casting';

const ViewPeople = (props) => {
  const { actor, casting } = useSelector(state => ({
    actor: state.people.person.actor,
    casting: state.people.person.casting,
  }));
  const dispatch = useDispatch();
  const actorId = props.match.params.id;

  useDocumentTitle(actor.id ? `${actor.name} Details` : 'View Person | MOVX');
  useEffect(() => {
    if (parseInt(actorId, 10) !== actor.id) {
      dispatch(fetchSelectedPerson(actorId));
    }
  }, []);
  return (
    <div>
      <PersonBiography actor={actor} history={props.history} />
      <Casting
      actor={actor}
      casting={casting}
      history={props.history}
      />
    </div>
  )
}

export default ViewPeople
