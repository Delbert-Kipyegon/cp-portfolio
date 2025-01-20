import AnimationWrapper from "./animation-wrapper";

const Blog = () => (
  <section
    id="blog"
    className="min-h-screen flex items-center justify-center px-4 py-16"
  >
    <AnimationWrapper>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-raleway">
          Blog
        </h2>
        <p className="text-center">
          Coming soon! I&apos;ll be sharing my thoughts on technology, business,
          and innovation.
        </p>
      </div>
    </AnimationWrapper>
  </section>
);

export default Blog;
