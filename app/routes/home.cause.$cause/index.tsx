import { useParams } from "@remix-run/react";
import React from "react";
import { Cause } from "~/components/CauseThatMatter";

type Props = {};

export const CausePreview: React.FC<Props> = ({}) => {
  const { cause } = useParams() as { cause: string };
  return (
    <>
      <div className="container mx-auto py-4">
        <Cause title={`causes.${cause}`} rows={4} />
      </div>
    </>
  );
};

CausePreview.defaultProps = {};

export default CausePreview;
