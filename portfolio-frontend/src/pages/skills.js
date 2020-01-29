import skillsStyles from './skills.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';

const skills = ({ data }) => {
  console.log(data);
  const { dynamicSkills } = data.strapiProfile;
  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 .5rem 1.45rem`,
        }}
      >
        <h1 className="text-center my-5">SKILLS</h1>
        <h3 className="text-center py-4">Languages</h3>
        <ul className={`${skillsStyles.skillsUl} row`}>
          {dynamicSkills.map(skill => (
            <Fragment>
              {skill.skillType === 'language' && (
                <li className="col-4">{skill.skill}</li>
              )}
            </Fragment>
          ))}
        </ul>
        <h3 className="text-center py-4">
          Frameworks, Libraries, Databases, &amp; Data Transfer
        </h3>
        <ul className={`${skillsStyles.skillsUl} mb-5 row`}>
          {dynamicSkills.map(skill => (
            <Fragment>
              {skill.skillType !== 'language' && (
                <li className="col-4">{skill.skill}</li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    strapiProfile {
      dynamicSkills {
        skill
        id
        skillType
      }
    }
  }
`;

export default skills;
