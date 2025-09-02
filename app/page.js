import Link from "next/link";

export default function Home() {
  const templateLinks = [
    {
      title: "Marketing Dashboard",
      url: "/marketing/dashboard",
    },
    {
      title: "Marketing Campaign",
      url: "/marketing/campaign",
    },
    {
      title: "Marketing Campaign Detail",
      url: "/marketing/campaign/campaign-detail",
    },
    {
      title: "Marketing Campaign Kpi Target",
      url: "/marketing/campaign/campaign-kpi-target",
    },
  ];
  return (
    <>
      <div className="p-[22px]">
        <h2 className="text-2xl">UI Page Templates </h2>
        <ul className="list-disc p-6">
          {templateLinks.map((ele) => {
            return (
              <li>
                <Link href={ele.url} className="hover:text-red-400">
                  {ele.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
