export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'THE USABUZZ';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Trend That Trends';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2023 THE USABUZZ. ALL RIGHTS RESERVED.\n' +
      'Unauthorized use, reproduction, or distribution of any content, materials, or intellectual property owned by THE USABUZZ is strictly prohibited without prior written consent. All trademarks, logos, and service marks displayed on this platform are the property of their respective owners. THE USABUZZ reserves the right to take legal action against any infringement of its intellectual property rights. For inquiries regarding permissions or usage, please contact legal@https://www.usabuzz.netlify.app';

  return {
    name,
    blogTitle,
    footerText,
  };
};
