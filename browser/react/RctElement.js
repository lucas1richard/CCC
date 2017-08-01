import React from 'react';
import { connect } from 'react-redux';
import { updateTag } from '../redux/reducers';

const RctElement = ({htmlProp, tag, setTag}) => {
  let { childNodes } = htmlProp;
  const bg = htmlProp.nodeName === tag ? 'yellow' : 'inherit';
  childNodes = [].slice.call(childNodes);

  return (
    <div
      style={{marginLeft: '10px', backgroundColor: bg}}
      onClick={ev => {
        setTag(htmlProp.nodeName);
        ev.stopPropagation();
      }}
    >
    {(htmlProp.outerHTML) ? `${htmlProp.outerHTML.split('>')[0]}>` : htmlProp.value}
    {htmlProp.nodeName === '#text' && htmlProp.textContent !== 'undefined' && htmlProp.textContent}
    {htmlProp.nodeName === '#comment' && `<!-- ${htmlProp.textContent} -->`}
    {childNodes.map((ch, ix) => (
      <RctElement
        key={ix}
        htmlProp={ch}
        tag={tag}
        setTag={setTag}
      />
      ))}
      {(htmlProp.outerHTML && htmlProp.localName) ? `</${htmlProp.localName}>` : null}
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
