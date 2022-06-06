import * as React from "react";

interface ArrowLinkIconProps {
  props?: any
}

function ArrowLinkIcon(props : ArrowLinkIconProps ) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M16.76 7.51l-5.199-5.196c-.234-.239-.633-.066-.633.261v2.534a6.9 6.9 0 00-.881-.063c-3.813 0-6.915 3.042-6.915 6.783 0 2.516 1.394 4.729 3.729 5.924.367.189.71-.266.451-.572-.678-.793-1.008-1.645-1.008-2.602 0-2.348 1.93-4.258 4.303-4.258.108 0 .215.003.321.011v2.634c0 .326.398.5.633.262l5.199-5.193a.37.37 0 000-.525m-5.088 4.558V9.995a.371.371 0 00-.318-.367 5.42 5.42 0 00-.747-.05c-2.78 0-5.046 2.241-5.046 5 0 .557.099 1.092.292 1.602-1.261-1.111-1.979-2.656-1.979-4.352 0-3.331 2.77-6.041 6.172-6.041.438 0 .886.067 1.184.123a.372.372 0 00.441-.366V3.472l4.301 4.3-4.3 4.296z" />
    </svg>
  );
}

export default ArrowLinkIcon;
