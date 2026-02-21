import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Navigation, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Fix Leaflet's default icon path issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create custom icons
const defaultIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Component to handle map center updates when selectedBusiness changes
function MapUpdater({ selectedBusiness, businesses }) {
    const map = useMap();

    useEffect(() => {
        if (selectedBusiness && selectedBusiness.lat && selectedBusiness.lng) {
            map.flyTo([selectedBusiness.lat, selectedBusiness.lng], 15, {
                animate: true,
                duration: 1.5
            });
        } else if (businesses.length > 0) {
            // Fit bounds to all markers if there are businesses but none selected
            const bounds = L.latLngBounds(businesses.filter(b => b.lat && b.lng).map(b => [b.lat, b.lng]));
            if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [50, 50] });
            }
        }
    }, [selectedBusiness, businesses, map]);

    return null;
}

const MapView = ({ businesses, selectedBusiness, onSelectBusiness }) => {
    // Default center for Dakar, Senegal if no businesses are provided
    const defaultCenter = [14.693425, -17.447938];

    return (
        <MapContainer
            center={businesses.length > 0 && businesses[0].lat ? [businesses[0].lat, businesses[0].lng] : defaultCenter}
            zoom={12}
            style={{ height: '100%', width: '100%', zIndex: 10 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <MapUpdater selectedBusiness={selectedBusiness} businesses={businesses} />

            {businesses.map((business) => {
                if (!business.lat || !business.lng) return null;

                const isSelected = selectedBusiness && selectedBusiness.id === business.id;

                return (
                    <Marker
                        key={business.id}
                        position={[business.lat, business.lng]}
                        icon={isSelected ? selectedIcon : defaultIcon}
                        eventHandlers={{
                            click: () => onSelectBusiness(business),
                        }}
                    >
                        <Popup>
                            <div style={{ padding: '0px', minWidth: '200px' }}>
                                <img
                                    src={business.image}
                                    alt={business.name}
                                    style={{ height: '100px', objectFit: 'cover', borderRadius: '4px 4px 0 0', display: 'block', margin: '-14px -20px 10px', width: 'calc(100% + 40px)' }}
                                />

                                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>
                                    {business.name}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px', color: '#666' }}>
                                    <Star size={14} fill="#E31B23" color="#E31B23" />
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{business.rating}</span>
                                    <span style={{ fontSize: '12px' }}>({business.reviews} avis) • {business.price}</span>
                                </div>

                                <div style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                                        <MapPin size={12} /> {business.category}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link
                                        to={`/business/${business.id}`}
                                        style={{ color: '#00853F', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' }}
                                    >
                                        Voir détails
                                    </Link>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}&travelmode=driving`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                            background: '#E31B23', color: 'white', padding: '4px 8px',
                                            borderRadius: '4px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold'
                                        }}
                                    >
                                        <Navigation size={12} /> Itinéraire
                                    </a>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MapView;
