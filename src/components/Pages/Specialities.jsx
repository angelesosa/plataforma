import React, {useEffect} from "react";
import Banner from "../Organisms/Banner";
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import Card from '../Organisms/Card';

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src:
            "https://i.blogs.es/3cc483/1-hsisluifmo6kblfpoktlow/450_1000.jpeg",
          alt: "Banner especialidades"
        }}
        title="Banner Especialidades"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar tecnologia"
      />
      {
        specialities && 
        <main className="ed-grid m-grid-3"> 
          { specialities.map(s => (
            <Card 
              picture={s.picture}
              name={s.name}
              key={s.id}
              cardId={s.id}
              path={`especialidades`}
            />
          )) }
        </main>
      } 
    </>
  );
};

const mapToStateToProps = state => ({
  specialities: state.specialityReducer.specialities
});

export default connect(mapToStateToProps, {})(Specialities);
