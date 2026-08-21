export function MapSection() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9682.553012459299!2d-73.97880382413493!3d40.75858669686103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f549831b23%3A0x8900f4340c1547d!2sTimes%20Square%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1695824256850!5m2!1sen!2sbd"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    </div>
  )
}
