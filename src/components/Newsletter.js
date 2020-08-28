import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

class Newsletter extends React.Component {
  constructor() {
    super()
    this.state = {
      message:
        "Suscríbete a nuestro Newsletter y recibe noticias y promociones de nuestros servicios!",
      name: "",
      email: "",
      result: null,
    }
  }

  // handleSubmit = async e => {
  //   const result = await addToMailchimp(this.state.email, {
  //     FNAME: this.state.name,
  //   })
  //   if (result.result === "error") {
  //     alert(`Whoops, ${this.state.name} you're already subscribed!`)
  //   } else {
  //     alert(`Thank you for subscribing ${this.state.name}!`)
  //   }
  //   this.setState({ result: result })
  // }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ message: "Gracias por suscribirte" })
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "", name: "" })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <>
        <div className="center">
          <h2>{this.state.message}</h2>
          <form className="subscribe" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              name="NAME"
              id="mce-FNAME"
              className="subscribe-text"
              placeholder="Nombre"
              required
            />
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              name="EMAIL"
              id="mce-EMAIL"
              className="subscribe-email"
              placeholder="Mail"
              required
            />
            <button className="btn_sent" type="submit">
              Suscribirse
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default Newsletter
