"use client";

import type React from "react";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Calendar, Clock, ChevronRight, Search } from "lucide-react";

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "Luxury Real Estate Market Trends for 2025",
    excerpt:
      "Discover the emerging trends that are shaping the luxury real estate market in 2025 and beyond.",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Market Trends",
    image: "/images/news-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "How to Increase Your Property's Value Before Selling",
    excerpt:
      "Learn the most effective renovations and improvements that can significantly boost your property's market value.",
    date: "May 10, 2025",
    readTime: "4 min read",
    category: "Selling Tips",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "The Impact of Smart Home Technology on Property Values",
    excerpt:
      "Explore how integrating smart home features can enhance your property's appeal and value in today's market.",
    date: "May 5, 2025",
    readTime: "6 min read",
    category: "Technology",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    title: "Navigating the Mortgage Process: A Comprehensive Guide",
    excerpt:
      "A step-by-step guide to understanding and successfully navigating the mortgage application process.",
    date: "April 28, 2025",
    readTime: "7 min read",
    category: "Financing",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    title: "Sustainable Living: Eco-Friendly Features Buyers Want",
    excerpt:
      "Discover the sustainable features that environmentally conscious buyers are looking for in today's market.",
    date: "April 22, 2025",
    readTime: "5 min read",
    category: "Sustainability",
    image: "/images/news-5.jpg",
  },
  {
    id: 6,
    title: "Investment Properties: Analyzing ROI in Different Markets",
    excerpt:
      "Learn how to evaluate potential investment properties and calculate ROI across different real estate markets.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Investment",
    image: "/images/news-6.jpg",
  },
  {
    id: 7,
    title: "Designing the Perfect Home Office: Tips from the Experts",
    excerpt:
      "With remote work becoming permanent for many, here's how to create a productive and appealing home office space.",
    date: "April 8, 2025",
    readTime: "4 min read",
    category: "Interior Design",
    image: "/images/news-7.jpg",
  },
];

export default function NewsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter articles based on search query and active category
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = searchQuery
      ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory =
      activeCategory === "all" ||
      article.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Get featured article from filtered articles or use the first one
  const featuredArticle =
    filteredArticles.find((article) => article.featured) || filteredArticles[0];

  // Get regular articles (excluding the featured one)
  const regularArticles = featuredArticle
    ? filteredArticles.filter((article) => article.id !== featuredArticle.id)
    : filteredArticles;

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/news?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      router.push("/news");
    }
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      <main className='flex-1 pt-20'>
        {/* Hero Section */}
        <section className='py-16 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold tracking-tight mb-2'>
                  Real Estate News & Insights
                </h1>
                <p className='text-white/70'>
                  Stay informed with the latest trends, tips, and market updates
                  in luxury real estate.
                </p>
              </div>
              <div className='mt-4 md:mt-0 relative'>
                <form onSubmit={handleSearch} className='flex'>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                    <Input
                      type='search'
                      placeholder='Search articles...'
                      className='pl-10 w-full md:w-[300px] bg-black border-white/20'
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>
                  <Button type='submit' className='ml-2'>
                    Search
                  </Button>
                </form>
              </div>
            </div>
            <div className='relative aspect-[4/1] rounded-lg overflow-hidden mb-8'>
              <Image
                src='/images/news-hero.jpg'
                alt='News hero'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </section>

        {/* Search Results Indicator */}
        {searchQuery && (
          <section className='py-4 bg-black'>
            <div className='container mx-auto px-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-medium'>
                  Search results for:{" "}
                  <span className='text-primary'>"{searchQuery}"</span>
                </h2>
                <Button variant='outline' onClick={() => router.push("/news")}>
                  Clear Search
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Featured Article Section */}
        {featuredArticle && (
          <section className='py-12 bg-black'>
            <div className='container mx-auto px-4'>
              <h2 className='text-2xl font-bold mb-8'>
                {searchQuery ? "Top Result" : "Featured Article"}
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <span className='bg-primary/10 text-primary text-xs px-3 py-1 rounded-full'>
                      {featuredArticle.category}
                    </span>
                    <div className='flex items-center text-white/60 text-sm'>
                      <Calendar className='h-4 w-4 mr-1' />
                      {featuredArticle.date}
                    </div>
                    <div className='flex items-center text-white/60 text-sm'>
                      <Clock className='h-4 w-4 mr-1' />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                    {featuredArticle.title}
                  </h3>
                  <p className='text-white/70 mb-6'>
                    {featuredArticle.excerpt}
                  </p>
                  <Button asChild>
                    <Link href={`/news/${featuredArticle.id}`}>
                      Read Full Article
                      <ChevronRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Section */}
        <section className='py-12 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap gap-3 mb-8'>
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                className='rounded-full'
                onClick={() => handleCategoryChange("all")}
              >
                All
              </Button>
              <Button
                variant={
                  activeCategory === "Market Trends" ? "default" : "outline"
                }
                className='rounded-full'
                onClick={() => handleCategoryChange("Market Trends")}
              >
                Market Trends
              </Button>
              <Button
                variant={
                  activeCategory === "Selling Tips" ? "default" : "outline"
                }
                className='rounded-full'
                onClick={() => handleCategoryChange("Selling Tips")}
              >
                Selling Tips
              </Button>
              <Button
                variant={activeCategory === "Financing" ? "default" : "outline"}
                className='rounded-full'
                onClick={() => handleCategoryChange("Financing")}
              >
                Financing
              </Button>
              <Button
                variant={
                  activeCategory === "Technology" ? "default" : "outline"
                }
                className='rounded-full'
                onClick={() => handleCategoryChange("Technology")}
              >
                Technology
              </Button>
              <Button
                variant={
                  activeCategory === "Sustainability" ? "default" : "outline"
                }
                className='rounded-full'
                onClick={() => handleCategoryChange("Sustainability")}
              >
                Sustainability
              </Button>
            </div>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className='py-12 bg-black'>
          <div className='container mx-auto px-4'>
            <h2 className='text-2xl font-bold mb-8'>
              {regularArticles.length === 0
                ? "No articles found"
                : searchQuery
                ? "Search Results"
                : "Latest Articles"}
            </h2>

            {regularArticles.length === 0 ? (
              <div className='text-center py-12'>
                <p className='text-white/70 mb-6'>
                  No articles match your search criteria.
                </p>
                <Button onClick={() => router.push("/news")}>
                  View All Articles
                </Button>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {regularArticles.map((article) => (
                  <Link
                    href={`/news/${article.id}`}
                    key={article.id}
                    className='group'
                  >
                    <div className='bg-black border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col'>
                      <div className='relative aspect-[16/9]'>
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className='object-cover transition-transform group-hover:scale-105 duration-300'
                        />
                      </div>
                      <div className='p-6 flex-1 flex flex-col'>
                        <div className='flex items-center gap-4 mb-4'>
                          <span className='bg-primary/10 text-primary text-xs px-3 py-1 rounded-full'>
                            {article.category}
                          </span>
                        </div>
                        <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                          {article.title}
                        </h3>
                        <p className='text-white/70 mb-4 line-clamp-2 flex-1'>
                          {article.excerpt}
                        </p>
                        <div className='flex items-center justify-between text-white/60 text-sm mt-auto'>
                          <div className='flex items-center'>
                            <Calendar className='h-4 w-4 mr-1' />
                            {article.date}
                          </div>
                          <div className='flex items-center'>
                            <Clock className='h-4 w-4 mr-1' />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {regularArticles.length > 0 && !searchQuery && (
              <div className='flex justify-center mt-12'>
                <Button variant='outline'>Load More Articles</Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className='py-24 bg-black/90'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Subscribe to Our Newsletter
              </h2>
              <p className='text-white/70 mb-8'>
                Stay updated with the latest real estate news, market trends,
                and exclusive property listings.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-grow bg-black border-white/20'
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='py-12 bg-black border-t border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center gap-2 mb-4 md:mb-0'>
              <Building2 className='h-6 w-6 text-primary' />
              <span className='text-2xl font-bold tracking-tighter'>
                SKYLINE REALTY
              </span>
            </div>

            <div className='flex flex-wrap gap-8'>
              <Link href='/' className='text-sm text-white/70 hover:text-white'>
                Home
              </Link>
              <Link
                href='/properties'
                className='text-sm text-white/70 hover:text-white'
              >
                Buy
              </Link>
              <Link
                href='/sell'
                className='text-sm text-white/70 hover:text-white'
              >
                Sell
              </Link>
              <Link
                href='/news'
                className='text-sm text-white/70 hover:text-white'
              >
                News
              </Link>
              <Link
                href='/about'
                className='text-sm text-white/70 hover:text-white'
              >
                About us
              </Link>
              <Link
                href='/contact'
                className='text-sm text-white/70 hover:text-white'
              >
                Contact
              </Link>
            </div>

            <div className='mt-6 md:mt-0'>
              <p className='text-sm text-white/50'>
                © {new Date().getFullYear()} SKYLINE REALTY. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
