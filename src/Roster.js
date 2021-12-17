import React, { Component } from "react";
import './Roster.css';

class Roster extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div class="columns body-columns">
                    <div class="column is-half is-offset-one-quarter">
                        <div className="title">
                            <h1>{this.props.title}</h1>
                        </div>

                        <figure className="hover-image">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="https://s3media.247sports.com/Uploads/Assets/641/268/9268641.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630" alt="Lousiana State University " />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <div class="header">
                                            <div class="media">
                                                <div class="media-content">
                                                    <p class="name">{this.props.name}</p>
                                                    <p class="type">{this.props.type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="height">{this.props.height} | {this.props.class}</p>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure className="hover-image">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="https://s3media.247sports.com/Uploads/Assets/641/268/9268641.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630" alt="Lousiana State University " />
                                    </figure>
                                    <figcaption>
                                        <button type="submit">Full Bio</button>
                                    </figcaption>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <div class="header">
                                            <div class="media">
                                                <div class="media-content">
                                                    <p class="name">{this.props.name}</p>
                                                    <p class="type">{this.props.type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="height">{this.props.height} | {this.props.class}</p>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <footer class="footer">
                            <div class="container is-fluid">
                                <div class="content has-text-centered">
                                    <p>
                                        <strong>Bulma</strong> by
                                        <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}

export default Roster;