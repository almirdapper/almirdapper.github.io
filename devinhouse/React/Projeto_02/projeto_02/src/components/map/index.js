import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: -27.59508,
	lng: -48.54421,
};

function MyComponent() {
	return (
		<LoadScript googleMapsApiKey="AIzaSyB6uj2QnEStt4lLnRjU6Z5LIX3a2ZbleA0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					<Marker position={{ lat: -27.59508, lng: -48.54421 }}></Marker>
				</>
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(MyComponent);
