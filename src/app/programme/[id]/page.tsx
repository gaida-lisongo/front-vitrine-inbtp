import BlogContent from "@/components/Blog/BlogContent";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import { PageProps } from "@/types/blog";

const BlogSidebarPage = ({ params } : PageProps) => {

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <BlogContent params={params} />
            <BlogSidebar params={params} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;