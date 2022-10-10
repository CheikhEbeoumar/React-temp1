import styled from "styled-components";

export const AboutSection = styled.div`
  height: 500px;
  background: url('images/about-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Info = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
`;

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

export const InfoTitleSpan = styled.span`
  font-weight: normal;
`;
export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
`;

export const InfoDesc = styled.div`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;

export const InfoDescLink = styled.a`
  text-decoration: none;
`;
