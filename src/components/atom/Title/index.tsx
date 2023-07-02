import React from "react"

import './index.scss'

interface Props {
  color?: string;
}

 const Title : React.FunctionComponent<Props> = ({color}) => 
  <div className="title">{color}</div>


export default Title;