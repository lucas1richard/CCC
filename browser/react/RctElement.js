import React from 'react';
import { connect } from 'react-redux';
import { updateTag } from '../redux/reducers';

export const RctElement = ({htmlProp, tag, setTag}) => {
  let { childNodes } = htmlProp;

  /** Background style */
  const bg = htmlProp.nodeName === tag ? 'highlight' : '';

  /** Convert NodeList to array */
  childNodes = [].slice.call(childNodes);

  let openingTag = null;
  let closingTag = null;

  /** Set the opening/closing tags based on the html element attributes */
  if (htmlProp.outerHTML && htmlProp.localName) {
    openingTag = `${htmlProp.outerHTML.split('>')[0]}>`;
    closingTag = `</${htmlProp.localName}>`;
  } else if (htmlProp.nodeName === '#text' && htmlProp.textContent !== 'undefined') {
    openingTag = htmlProp.textContent;
  } else if (htmlProp.nodeName === '#comment') {
    openingTag = `<!-- ${htmlProp.textContent} -->`;
  }

  return (
    <div
      className={`mleft`}
      onClick={ev => {
        setTag(htmlProp.nodeName);
        ev.stopPropagation();
      }}
    >
    <span className={bg}>{openingTag}</span>
    {childNodes.map((ch, ix) => (
      <RctElement
        key={ix}
        htmlProp={ch}
        tag={tag}
        setTag={setTag}
      />
      ))}
      <span className={bg}>{closingTag}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tag: state.tag
});

const mapDispatchToProps = dispatch => ({
  setTag: tag => dispatch(updateTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(RctElement);
