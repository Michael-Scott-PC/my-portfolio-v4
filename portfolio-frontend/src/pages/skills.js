import styles from '../css/skills.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';

const skills = ({ data }) => {
  const { dynamicSkills } = data.strapiProfile;
  const colors = [
    'blue',
    'green',
    'red',
    'orangered',
    'purple',
    'orange',
    'indigo',
    'turquoise',
  ];
  return (
    <Layout>
      <SEO title="Skills" description="Computer programming skills." />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 .5rem 1.45rem`,
        }}
      >
        <h1 className="text-center my-5">SKILLS</h1>
        <h3 className={`${styles.skillsHeaders} text-center py-4`}>
          Languages
        </h3>
        <ul className={`${styles.skillsUl} row`}>
          {dynamicSkills.map(skill => (
            <Fragment key={skill.id}>
              {skill.skillType === 'language' && (
                <li
                  className="col-4"
                  style={{
                    color: `${
                      colors[Math.floor(Math.random() * colors.length)]
                    }`,
                    fontFamily: 'Cabin Sketch',
                    fontSize: '1.2em',
                    paddingRight: '10px',
                    paddingLeft: '10px',
                  }}
                >
                  {skill.skill}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
        <h3 className={`${styles.skillsHeaders} text-center py-4`}>
          Frameworks, Libraries, Databases, &amp; Data Transfer
        </h3>
        <ul className={`${styles.skillsUl} mb-5 row`}>
          {dynamicSkills.map(skill => (
            <Fragment key={skill.id}>
              {skill.skillType !== 'language' && (
                <li
                  className="col-4"
                  style={{
                    color: `${
                      colors[Math.floor(Math.random() * colors.length)]
                    }`,
                    fontFamily: 'Cabin Sketch',
                    fontSize: '1.1em',
                    paddingRight: '10px',
                    paddingLeft: '10px',
                  }}
                >
                  {skill.skill}
                </li>
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
