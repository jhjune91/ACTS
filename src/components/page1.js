import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div>
            <header>
              <h2>{this.props.title}</h2>
              {this.props.sub}
            </header>
            <nav>
                <ul>
                    <li><a href="https://www.naver.com/">Naver</a></li>
                    <li><a href="https://www.daum.net/">Daum</a></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Subject;