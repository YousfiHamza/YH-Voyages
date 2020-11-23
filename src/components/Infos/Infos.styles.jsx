import styled from "styled-components";

import { Grid } from "@material-ui/core";

export const InfoContainer = styled.div`
  background-color: white;
  min-width: 360px;
  position: relative;
  padding: 1rem;
  margin: 11px;
  border-radius: 0.429rem;
  /* width: auto !important; */
`;

export const Infodetails = styled(Grid)`
  margin: 22px auto;
`;

export const InfoIcon = styled.div`
  color: #ffffff;
  background-color: rgb(33, 49, 77);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 50%;
  margin: 0 auto;
  width: 55%;
  padding: 22px 22px;
`;

export const InfoTitle = styled(Grid)`
  width: 15.46rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.45rem;
  color: #21314d;
`;

export const InfoDesc = styled(Grid)`
  font-size: 0.9rem;
  line-height: 1.35rem;
  max-width: 20.5rem;
  padding-top: 0.25rem;
  color: #333333;
`;

export const InfoDownloads = styled.img`
  margin: 11px auto;
  max-width: 100%;
  cursor: pointer;
`;
