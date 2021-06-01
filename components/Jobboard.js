import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;

  @media screen and (min-width: 600px) {
    max-width: calc(896px + 256 * ((100vw - 320px) / 1280));
    margin: 0px auto;
    padding: calc(14px + 4 * ((100vw - 320px) / 1280))
      calc(28px + 8 * ((100vw - 320px) / 1280));
  }
`;

const JobList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(896px + 256 * ((100vw - 320px) / 1280));
  margin: 0px auto;
  padding: calc(14px + 4 * ((100vw - 320px) / 1280))
    calc(28px + 8 * ((100vw - 320px) / 1280));
`;

const JobDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    margin-right: 20px;
  }
`;

const JobTitle = styled.div`
  width: 100%;
  margin: 0;

  @media screen and (min-width: 600px) {
    width: 40%;
    margin-right: 15px;
  }
`;

const JobHide = styled.div`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const Tag = styled("span")`
  margin: 5px;
  font-size: 11.8px;
`;

const Jobboard = ({ jobs }) => {
  const tags = (tags) => {
    let newArray = [];

    tags.map((tag) => newArray.push(tag.name));

    return newArray.join(",");
  };

  return (
    <Container>
      <h1 style={{ padding: "calc(28px + 8 * ((100vw - 320px) / 1280))" }}>
        Jobs
      </h1>
      {jobs &&
        jobs.map((job) => (
          <JobList key={job.id}>
            <JobTitle>
              <JobDescription>
                <img
                  src={
                    job.company.logoUrl
                      ? job.company.logoUrl
                      : "https://via.placeholder.com/42"
                  }
                />
                <div>
                  <div
                    style={{
                      fontSize: "calc(18.2px + 5.2 * ((100vw - 320px) / 1280))",
                      fontWeight: 700,
                    }}
                  >
                    {job.title}
                  </div>
                  <span>{job.company.name}</span>
                </div>
              </JobDescription>
            </JobTitle>
            <JobHide>
              {job.tags.map((tag) => (
                <Tag>{tag.name}</Tag>
              ))}
            </JobHide>
            <JobHide style={{ marginLeft: "10px", textAlign: "right" }}>
              {job.locationNames
                ? job.locationNames
                : null + job.remotes.length < 1
                ? null
                : " Remote"}
            </JobHide>
          </JobList>
        ))}
    </Container>
  );
};

export default Jobboard;
