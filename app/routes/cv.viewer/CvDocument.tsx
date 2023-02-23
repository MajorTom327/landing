import React from 'react';
import { Document } from '@react-pdf/renderer';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

type Props = {
};

export const CvDocument: React.FC<Props> = ({}) => {
  return (<>
    <Document>
      <Page1 />
      <Page2 />
      <Page3 />
    </Document>
  </>);
}

CvDocument.defaultProps = {
};

export default CvDocument;
