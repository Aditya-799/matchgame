import {Component} from 'react'
import './index.css'

class AllItems extends Component {
  state = {activeTab: 'FRUIT'}

  changeTab = id => {
    this.setState({activeTab: id})
  }

  changeImage = id => {
    const {matchGamechange} = this.props
    matchGamechange(id)
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {activeTab} = this.state
    let filteredimagesList = null
    if (activeTab !== '') {
      filteredimagesList = imagesList.filter(
        eachItem => eachItem.category === activeTab,
      )
    } else {
      filteredimagesList = imagesList.filter(
        eachItem => eachItem.category === 'FRUIT',
      )
    }

    return (
      <div className="items-container">
        <ul className="headings">
          {tabsList.map(eachItem => {
            const isselectedClass =
              eachItem.tabId === activeTab ? 'underline' : null
            return (
              <li className={isselectedClass} key={eachItem.tabId}>
                <button
                  type="button"
                  className="tabbutton"
                  onClick={() => this.changeTab(eachItem.tabId)}
                >
                  {eachItem.displayText}
                </button>
              </li>
            )
          })}
        </ul>
        <ul className="images-container">
          {filteredimagesList.map(eachItem => (
            <li key={eachItem.id}>
              <button
                type="button"
                className="button"
                onClick={() => this.changeImage(eachItem.id)}
              >
                <img
                  src={eachItem.thumbnailUrl}
                  alt="thumbnail"
                  className="small-image"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AllItems
