const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Company name" />
        <input type="text" placeholder="Project details" />
        <select>
          <option value="">Budget</option>
          <option value="">200-400</option>
          <option value="">400-600</option>
          <option value="">600-800</option>
          <option value="">800-1000</option>
          </select>
      </form>
      <p>Book a free 30-minute initial consultation where we'll
        discuss your project. </p>
      <button>Book a free consultation</button>
    </section>
  )
}

export default Contact