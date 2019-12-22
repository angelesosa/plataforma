import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCourse } from "../../redux/actionCreators";
import Banner from "../Organisms/Banner";

const Course = ({ course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, []);

  return (
    <>
      {course && (
        <>
          <Banner
            color="dark-color"
            image={{
              src: course.picture,
              alt: course.name
            }}
            title={course.name}
            subtitle={course.subtitle}
            courseBanner
            poster={course.picture}
          />
        </>
      )}
    </>
  );
};

const mapToStateToProps = state => ({
  course: state.courseReducer.course
});

export default connect(mapToStateToProps)(Course);
