import React from 'react';
import style from './style';
import GoogleMapReact from 'google-map-react';
import { Paper } from '@material-ui/core';

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

export default function Form() {
	const classes = style();
	return (
		<Paper className={classes.root}>
			<GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={{
			lat: -2.178308,
			lng:  -79.875970,
		  }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={-2.178308}
            lng={-79.875970}
            text="Oficina norte"
          />
        </GoogleMapReact>
		</Paper>
	);
}
