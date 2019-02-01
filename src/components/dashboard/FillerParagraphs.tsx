import React from "react";

export interface FillerParagraphsProps {
  text: string;
  times: number;
}

const FillerParagraphs = (props: FillerParagraphsProps) => {

  const { text, times } = props;

  return (<ul>{[...Array(times)].map((e, i) => <li key={i}>{text}</li>)}</ul>)
}

export default FillerParagraphs;