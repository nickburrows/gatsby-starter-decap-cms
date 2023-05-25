import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article
        key={v4()}
        className="flex p-4 text-gray-800 border-l-4 border-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
        role="alert">
        <div>
          <p className="font-medium">{testimonial.quote}</p>

          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
