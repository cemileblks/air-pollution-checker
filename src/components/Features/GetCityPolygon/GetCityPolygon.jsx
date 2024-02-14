const GetCityPolygon = async (lat, lon, radiusKm = 8, numberOfPoints = 32) => {
    const points = [];
    const earthRadiusKm = 6371;
    const distanceBetweenPoints = (2 * Math.PI * earthRadiusKm) / numberOfPoints;

    for (let i = 0; i < numberOfPoints; i++) {
        const angle = (Math.PI / 180) * (i / numberOfPoints) * 360;
        const dx = radiusKm * Math.cos(angle);
        const dy = radiusKm * Math.sin(angle);

        const latPoint = lat + (180 / Math.PI) * (dy / earthRadiusKm);
        const lonPoint = lon + (180 / Math.PI) * (dx / earthRadiusKm) / Math.cos(lat * Math.PI / 180);

        points.push([lonPoint, latPoint]);
    }

    // Close the polygon
    points.push(points[0]);

    // Reverse the order of coordinates
    const formattedPolygon = points.map(coord => [coord[0], coord[1]]);

    return [formattedPolygon];
};

export default GetCityPolygon;


