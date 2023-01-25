import React from 'react';
import PlainSpan from './PlainSpan';
import ItalicSpan from './ItalicSpan';
import StrikeSpan from './StrikeSpan';
import BoldSpan from './BoldSpan';
import CodeElement from './CodeElement';

const PreviewInlineElements = ({ contents }) =>
  contents.map((content, index) => {
    switch (content.type) {
      case 'BOLD':
        return <BoldSpan key={index} contents={content.value} />;

      case 'PLAIN_TEXT':
        return <PlainSpan key={index} contents={content.value} />;

      case 'STRIKE':
        return <StrikeSpan key={index} contents={content.value} />;

      case 'ITALIC':
        return <ItalicSpan key={index} contents={content.value} />;

      case 'INLINE_CODE':
        return <CodeElement key={index} contents={content.value} />;

      default:
        return null;
    }
  });

export default PreviewInlineElements;