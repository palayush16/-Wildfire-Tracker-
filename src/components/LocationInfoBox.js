
const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Info</h2>
            <ul>
                <li><strong>{info.title}</strong></li>
                <li>ID: <strong>{info.id}</strong></li>
                
                
            </ul>
            
        </div>
    )
}

export default LocationInfoBox
