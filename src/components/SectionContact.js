import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionContact extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block contact-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              <div className="block-content inner-medium">
                {markdownify(_.get(section, 'content', null))}
                <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                  className="contact-form">
                  <p className="screen-reader-text">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <p className="form-row">
                    <label htmlFor="contact-form-name" className="form-label">Name</label>
                    <input type="text" name="name" id="contact-form-name" className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label htmlFor="contant-form-email" className="form-label">Email address</label>
                    <input type="email" name="email" id="contant-form-email" className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label htmlFor="contant-form-message" className="form-label">Message</label>
                    <textarea name="message" id="contant-form-message" className="form-textarea" rows="7" />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row form-submit">
                    <button type="submit" className="button">Send Message</button>
                  </p>
                </form>
              </div>
            </section>
        );
    }
}
