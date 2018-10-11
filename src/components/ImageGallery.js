import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#___gatsby')

export default class ImageGallery extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  modalIsOpen: false
		};
	
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	  }
	
	  openModal(id) {
            this.setState({modalIsOpen: {
                [id]: true
            }
        });
	  }
	
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }
	
	  closeModal(id) {
		this.setState({modalIsOpen: {
                [id]: false
            }
        });
        console.log(this.props);
      }
      
	render() {
        return (
		<div className="columns wrap">
			{this.props.imageUrls.map((image, index) => {
				<div key={index} className="column is-one-quarter-desktop is-one-half-tablet">
					<a href='javascript:void(0)' onClick={() => this.openModal(index)}>
                        <img src={image.imageUrl} />
                    </a>

					<Modal
					isOpen={this.state.modalIsOpen.index}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal(index)}
					style={customStyles}
					contentLabel="Example Modal"
					>
						<img src={image.imageUrl} />
					</Modal>
				</div>
            })}
		</div>
        )
	}
}

ImageGallery.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string
    })
  ),
}

