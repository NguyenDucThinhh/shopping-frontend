import { SvgIcon, SvgIconProps } from "@mui/material";

export type SvgIconComponent = React.FC<SvgIconProps>;

export const TwitterIcon: SvgIconComponent = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <path
        d="M45.28,8.926a17.519,17.519,0,0,1-5.033,1.38A8.789,8.789,0,0,0,44.1,5.458a17.541,17.541,0,0,1-5.564,2.126A8.771,8.771,0,0,0,23.6,15.576,24.876,24.876,0,0,1,5.544,6.421a8.772,8.772,0,0,0,2.712,11.7,8.726,8.726,0,0,1-3.969-1.1c0,.037,0,.073,0,.11a8.768,8.768,0,0,0,7.029,8.592,8.777,8.777,0,0,1-3.957.15,8.771,8.771,0,0,0,8.185,6.085A17.58,17.58,0,0,1,4.661,35.712a17.772,17.772,0,0,1-2.09-.123A24.8,24.8,0,0,0,16,39.527c16.117,0,24.931-13.352,24.931-24.931q0-.57-.025-1.134A17.8,17.8,0,0,0,45.28,8.926Z"
        transform="translate(7.132 9.073)"
      />
    </SvgIcon>
  );
};

export const LinkedinIcon: SvgIconComponent = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <path
        d="M8.831,39.452H.652V13.112H8.831ZM4.737,9.519A4.759,4.759,0,1,1,9.474,4.738,4.777,4.777,0,0,1,4.737,9.519ZM39.443,39.452H31.281V26.63c0-3.056-.062-6.975-4.252-6.975-4.252,0-4.9,3.32-4.9,6.754V39.452h-8.17V13.112H21.8v3.593h.114a8.594,8.594,0,0,1,7.739-4.253c8.278,0,9.8,5.451,9.8,12.531V39.452Z"
        transform="translate(11.342 10.276)"
      />
    </SvgIcon>
  );
};

export const DiscordIcon: SvgIconComponent = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <g transform="translate(7.858 14.167)">
        <path
          d="M37.93,63.7a36.953,36.953,0,0,0-9.12-2.829.139.139,0,0,0-.147.069,25.736,25.736,0,0,0-1.136,2.333,34.109,34.109,0,0,0-10.243,0,23.617,23.617,0,0,0-1.153-2.333.144.144,0,0,0-.147-.069A36.845,36.845,0,0,0,6.864,63.7a.13.13,0,0,0-.06.052,37.817,37.817,0,0,0-6.619,25.5.154.154,0,0,0,.058.1,37.158,37.158,0,0,0,11.188,5.656.145.145,0,0,0,.157-.052,26.556,26.556,0,0,0,2.289-3.723.142.142,0,0,0-.078-.2,24.473,24.473,0,0,1-3.5-1.666.144.144,0,0,1-.014-.238c.235-.176.47-.359.694-.544a.139.139,0,0,1,.145-.02,26.5,26.5,0,0,0,22.518,0,.138.138,0,0,1,.147.018c.224.185.459.37.7.546a.144.144,0,0,1-.012.238,22.964,22.964,0,0,1-3.5,1.664.143.143,0,0,0-.076.2,29.827,29.827,0,0,0,2.287,3.721.142.142,0,0,0,.157.053,37.032,37.032,0,0,0,11.206-5.656.144.144,0,0,0,.058-.1,37.568,37.568,0,0,0-6.625-25.5A.113.113,0,0,0,37.93,63.7ZM14.972,84.167a4.546,4.546,0,0,1,0-9.032,4.546,4.546,0,0,1,0,9.032Zm14.888,0a4.546,4.546,0,0,1,0-9.032,4.546,4.546,0,0,1,0,9.032Z"
          transform="translate(0.001 -60.871)"
        />
      </g>
    </SvgIcon>
  );
};
