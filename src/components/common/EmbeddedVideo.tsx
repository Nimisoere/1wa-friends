import React from "react";

interface Props {
  title: string;
  description: string;
}

const EmbeddedVideo: React.FC<Props> = ({ title, description }) => <div />;

export default EmbeddedVideo;
