import React, { Component } from 'react';
import Cleave from 'cleave.js/react';
class TextInput extends Component {
  constructor(props) {
    super(props);

    const value = this.props.field !== {} ? this.props.field.input.value : '';

    this.state = { value };
  }
  onInputChange(value) {
    this.setState({ value });
  }

  render() {
    const { includeIcon, disabled, extraIcon } = this.props;
    const { input, meta } = this.props.field;

    let className = `form-input--container
      ${includeIcon !== '' ? 'form-input--has-icon' : ''}
      ${this.state.value !== '' ? 'form-input--has-content' : ''}
      ${meta.touched && meta.error ? 'form-input--has-error' : ''}`;

    className += includeIcon !== '' ? ' form-input--icon-padding' : '';
    className += disabled ? ' form-input--disabled' : '';

    return (
      <div className="form-input--wrapper">
        {this.props.label && (
          <label htmlFor={this.props.name} className="form-input--label">
            {this.props.label}
          </label>
        )}
        <div className={className}>
          {includeIcon !== '' && (
            <i className={`form-input--icon ${includeIcon}`} />
          )}
          {extraIcon !== '' && (
            <div className="form-input--extra-icon">
              <img src={extraIcon} alt="" />
            </div>
          )}
          {this.props.isCleave && (
            <Cleave
              {...input}
              className="form-input"
              id={this.props.id || this.props.name}
              data-culqi={this.props.dataCulqi}
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={event => {
                if (this.props.field !== {}) {
                  input.onChange(event);
                }
                this.onInputChange(event.target.value);
              }}
              disabled={disabled}
              options={this.props.options}
            />
          )}
          {!this.props.isCleave && (
            <input
              {...input}
              className="form-input"
              id={this.props.id || this.props.name}
              data-culqi={this.props.dataCulqi}
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={event => {
                if (this.props.field !== {}) {
                  input.onChange(event);
                }
                this.onInputChange(event.target.value);
              }}
              type={this.props.type}
              disabled={disabled}
            />
          )}
        </div>
        {meta.touched && (
          <span className="form-input--error-text">{meta.error}</span>
        )}
      </div>
    );
  }
}
export default TextInput;
