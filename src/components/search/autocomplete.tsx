import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Highlight, connectAutoComplete } from "react-instantsearch-dom"
import AutoSuggest from "react-autosuggest"

//interface Props {
//}

//const Autocomplete = (props: Props) => {
class Autocomplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onSuggestionCleared: PropTypes.func.isRequired,
  }

  state = {
    // @ts-ignore
    value: this.props.currentRefinement,
  }

  // @ts-ignore
  onChange = (_: any, { newValue }) => {
    if (!newValue) {
      // @ts-ignore
      this.props.onSuggestionCleared()
    }

    this.setState({
      value: newValue,
    })
  }

  // @ts-ignore
  onSuggestionsFetchRequested = ({ value }) => {
    // @ts-ignore
    this.props.refine(value)
  }

  onSuggestionsClearRequested = () => {
    // @ts-ignore
    this.props.refine()
  }

  getSuggestionValue(hit: any) {
    return hit.title
  }

  renderSuggestion(hit: any) {
    return (
      <Link to={hit.page_path} className="p-3 flex items-stretch">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Link>
    )
  }

  render() {
    // @ts-ignore
    const { hits, onSuggestionSelected } = this.props
    const { value } = this.state

    const inputProps = {
      placeholder: "Rechercher un article, une donnée...",
      onChange: this.onChange,
      value,
    }

    const style = {
      container:
        "w-96 h-10 bg-white border-2 border-gray-200 rounded-xl relative",
      input:
        "appearance-none w-full p-2 bg-transparent outline-none focus:outline-none active:outline-none text-sm",
      inputOpen: "",
      inputFocused: "",
      suggestionsContainer: "",
      suggestionsContainerOpen: "block mt-2 bg-white border border-gray-200",
      suggestionsList: "",
      suggestion: "truncate",
      suggestionFirst: "",
      suggestionHighlighted: "bg-gray-200",
    }

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={style}
      />
    )
  }
}

// @ts-ignore
export default connectAutoComplete(Autocomplete)
