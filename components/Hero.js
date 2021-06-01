import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(to right, rgb(231, 142, 243), rgb(237, 217, 94));
  width: 100%;
  position: relative;
  min-height: calc(350px + 100 * ((100vw - 320px) / 1280));
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 96%);
  padding: 30px;
`;

  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
  `;

  const Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  `;

const Hero = () => {
  return (
    <Container>
      <Nav>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              width="14px"
              height="13px"
              viewBox="0 0 14 13"
              style={{ width: "21px", height: "auto" }}
            >
              <title>Group 8</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Artboard" transform="translate(-26.000000, -27.000000)">
                  <g id="Group-8" transform="translate(26.000000, 26.000000)">
                    <path
                      d="M7.4472136,2.01246118 C7.39883174,1.91569748 7.3203705,1.83723623 7.2236068,1.78885438 C6.97661755,1.66535976 6.67628103,1.76547193 6.5527864,2.01246118 L1.17082039,12.7763932 C1.13610653,12.8458209 1.11803399,12.9223775 1.11803399,13 C1.11803399,13.2761424 1.34189161,13.5 1.61803399,13.5 L12.381966,13.5 C12.4595886,13.5 12.5361451,13.4819275 12.6055728,13.4472136 C12.8525621,13.323719 12.9526742,13.0233825 12.8291796,12.7763932 L7.4472136,2.01246118 Z"
                      id="Triangle"
                      stroke="#000000"
                    ></path>
                    <g
                      id="Group-3"
                      transform="translate(0.618034, 4.000000)"
                      fill="#000000"
                    >
                      <path
                        d="M9.38196601,10 L1,10 C0.44771525,10 -7.77156117e-16,9.55228475 -8.8817842e-16,9 C-8.8817842e-16,8.8447549 0.0361450918,8.69164184 0.105572809,8.5527864 L4.38196601,1.42108547e-14 L9.38196601,10 Z"
                        id="Combined-Shape"
                      ></path>
                      <g
                        id="Group-6-Copy"
                        transform="translate(6.381966, 1.000000)"
                      >
                        <ellipse
                          id="Oval"
                          cx="1"
                          cy="0.945945946"
                          rx="1"
                          ry="1"
                        ></ellipse>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span style={{ padding: "14px" }}>GraphQL.jobs</span>
          </div>
        </div>
        <div>Post your job</div>
      </Nav>
      <Message>
        <h1>Work with <span style={{ color: "#fff" }}>GraphQL</span> in a modern startup</h1>
      </Message>
    </Container>
  );
}

export default Hero;
