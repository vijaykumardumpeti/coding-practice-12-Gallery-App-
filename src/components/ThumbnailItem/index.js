import {Component} from 'react'

import './index.css'

export default class ThumbnailItem extends Component {
  render() {
    const {eachObject, key, updateImage, isClicked} = this.props

    const {
      thumbnailUrl,
      thumbnailAltText,
      imageUrl,

      imageAltText,
    } = eachObject

    this.updateImageUrl = () => {
      updateImage(imageUrl, imageAltText)
    }
    console.log(isClicked)
    const className2 = isClicked ? 'opacity2' : 'opacity1'

    return (
      <li key={key}>
        <button
          onClick={this.updateImageUrl}
          type="button"
          className={`btn-style ${className2}`}
        >
          <img
            className="thumbnail-image"
            alt={thumbnailAltText}
            src={thumbnailUrl}
          />
        </button>
      </li>
    )
  }
}
