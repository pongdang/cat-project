import { useState } from "react";
import styled from "styled-components";
import { Loading } from "./Loading";

export function Image({ src, alt }) {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <Img onLoad={onLoad} src={src} alt={alt} />
    </>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
`;
