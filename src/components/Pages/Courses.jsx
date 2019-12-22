import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllCourses } from "../../redux/actionCreators";
import Card from '../Organisms/Card';

const Courses = ({ match, courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses());
  } , [match])

  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://i.blogs.es/3cc483/1-hsisluifmo6kblfpoktlow/450_1000.jpeg",
          alt: "Cursos"
        }}
        title="Nuestros cursos"
        subtitle="Este plantel docente esta alcamente calificado para guiarte en tu aprendizaje"
      />
      {courses && (
        <main className="ed-grid m-grid-5 lg-grid-4 row-gap">
          {courses.map(c => (
            <Card
              key={c.id} 
              picture={c.picture}
              name={c.name}
              path='cursos'
              cardId={c.id} 
            />
          ))}
        </main>
      )}
    </>
  )
};

const mapToStateToProps = state => ({
  courses: state.courseReducer.courses
});

export default connect(mapToStateToProps, {})(Courses);
