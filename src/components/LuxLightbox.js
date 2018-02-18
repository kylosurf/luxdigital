import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import VideoIframe from './VideoIframe';

class LuxLightbox extends Component {
  constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        const { content } = this.props

        return (
            <div>
                <button
                    type="button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Open Lightbox
                </button>

                {isOpen &&
                    <Lightbox
                        mainSrc={content[photoIndex]}
                        nextSrc={content[(photoIndex + 1) % content.length]}
                        prevSrc={content[(photoIndex + content.length - 1) % content.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + content.length - 1) % content.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % content.length,
                        })}
                    />
                }
            </div>
        );
    }
}

export default LuxLightbox;
