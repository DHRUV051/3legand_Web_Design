import IntroBlog from "@/components/Blog/IntroBlog";
import Last from "@/components/Blog/Last";
import Product from "@/components/Blog/Product";

const BlogPage = () => {
  return (
    <main className="pt-4">
      <IntroBlog />
      <Product />
      <Last />
    </main>
  );
};

export default BlogPage;
