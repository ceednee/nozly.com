import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  IconSun,
  IconBrandX,
  IconMenu2,
  IconTools
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="bg-white bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23c9c8ca%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat bg-[size:40px_40px]">
      <header className="border-b">
        <div className="container items-center mx-auto justify-center p-5">
          <div className="flex items-center justify-between w-full">
            <Link
              className="flex items-center gap-1"
              href="/"
            >
              Logo
            </Link>
            <nav className="flex items-center">
              <ul className="lg:items-center gap-10 hidden lg:flex">
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="transition-opacity duration-300 opacity-100">
                <Button
                  variant="outline"
                  className="shadow-sm inline-flex items-center justify-center size-9"
                >
                  <IconSun className="size-4" />
                </Button>
              </div>
              <Link href="/profile">
                <Button
                  className="shadow-sm inline-flex items-center justify-center"
                >
                  <span>Login with</span>
                  <IconBrandX className="size-4" />
                </Button>
              </Link>
              <IconMenu2 className="size-6 lg:hidden" />
            </div>
          </div>
        </div>
      </header>

      <section className="flex flex-col text-center lg:pb-0" id="hero">
        <div className="flex">
          <div className="relative flex-1 border-r p-1 max-lg:hidden">
            <div className="h-full w-full border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>
          </div>
          <div className="container flex-col items-center mx-auto justify-center px-5 py-10 lg:py-16">
            <h1 className="mx-auto max-w-[498px] text-[2.5rem] leading-[1.2] tracking-[-1.6px] text-balance md:text-[4rem] md:!leading-[1.15] md:tracking-[-4.32px] lg:text-7xl">Say Goodbye to Task Overload</h1>
            <p className="text-muted-foreground mx-auto mt-5 max-w-[500px] leading-[1.5] tracking-[-0.32px] md:mt-6">Prioritize, automate, and stay ahead—AI simplifies your tasks so you can focus on what matters most.</p>
            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-zinc-600 h-9 px-4 py-2 mt-6 gap-1 md:mt-8 lg:mt-10" href="/dashboard">Get started with <IconBrandX className="size-4" /></a>
          </div>
          <div className="relative flex-1 border-l p-1 max-lg:hidden">
            <div className="h-full w-full border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </div>

        <div className="flex h-8 max-lg:hidden gap-1">
          <div className="flex-1 border"></div>
          <div className="h-full w-92 border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>
          <div className="flex-1 border"></div>
        </div>

        <div className="flex">
          <div className="relative flex-1 p-1 max-lg:hidden" />
          <div className="container flex-col lg:border-x items-center mx-auto justify-center px-5 py-6">
            <Image src="/image.png" alt="" width={1000} height={800} className="mx-auto rounded-xl border object-contain p-1 shadow-lg 2xl:max-w-full dark:invert" />
          </div>
          <div className="relative flex-1 p-1 max-lg:hidden" />
        </div>

        <div className="flex h-8 gap-1">
          <div className="flex-1 border"></div>
          <div className="h-full w-92 border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 dark:[--pattern-fg:var(--color-white)]/10"></div>
          <div className="flex-1 border"></div>
        </div>
      </section>

      <section className="flex flex-col items-center lg:pb-0" id="brands">
        <div className="container flex-col lg:border-x items-center mx-auto justify-center px-5 py-10 lg:py-16">
          <div className="inline-flex items-center rounded-md border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm">
            <IconBrandX className="size-4" />
            <span>Brands</span>
          </div>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl py-2">Brands</h2>
        </div>
      </section>

      <section className="flex flex-col lg:pb-0 border-t" id="features">
        <div className="flex">
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
          <div className="container flex-col lg:border-x items-center mx-auto justify-center px-5 py-10 lg:py-16">
            <div className="inline-flex items-center rounded-md border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm">
              <IconTools className="size-4" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl py-2">Smart productivity with AI</h2>
            <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">Unlock smarter productivity with features that help you manage tasks, time, and focus—seamlessly.</p>
          </div>
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
        </div>
      </section>

      <section className="flex flex-col separator">
        <div className="flex h-8 gap-1">
          <div className="flex-1 border"></div>
          <div className="h-full w-92 border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 dark:[--pattern-fg:var(--color-white)]/10"></div>
          <div className="flex-1 border"></div>
        </div>
      </section>

      <section className="flex flex-col lg:pb-0" id="adaptive">
        <div className="flex">
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
          <div className="container flex-col lg:border-x items-center mx-auto justify-center px-5 py-10 lg:py-16">
            <div className="inline-flex items-center rounded-md border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm">
              <IconTools className="size-4" />
              <span>Adaptive</span>
            </div>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl py-2">Stay agile with adaptive workflows</h2>
            <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">AI streamlines your processes to adjust as priorities shift.</p>
          </div>
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
        </div>
      </section>

      <section className="flex flex-col border-t lg:pb-0" id="adaptive-parts">
        <div className="flex">
          <div className="flex-1 p-1 max-lg:hidden">
            <div className="h-full w-full max-lg:hidden border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 dark:[--pattern-fg:var(--color-white)]/10"></div>
          </div>
          <div className="container flex-col lg:border-x items-center mx-auto justify-center">
            <div className="grid xl:grid-cols-3">

              <div className="flex flex-col h-full py-5 lg:py-0">
                <div className="px-5 py-4 xl:border-b h-full">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Unified Scheduling</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.</p>
                </div>
                <div className="flex flex-col h-full mx-auto py-4 px-5 justify-center">
                  <Image src="/stats.png" alt="Scheduling" width={500} height={500} className="border rounded-md shadow-lg" />
                </div>
              </div>

              <div className="flex flex-col h-full py-5 lg:py-0">
                <div className="px-5 py-4 xl:border-b h-full">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Insightful Performance</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.</p>
                </div>
                <div className="flex flex-col h-full mx-auto py-4 px-5 justify-center">
                  <Image src="/reminder.png" alt="stats" width={500} height={500} className="border rounded-md shadow-lg" />
                </div>
              </div>

              <div className="flex flex-col h-full py-5 lg:py-0">
                <div className="px-5 py-4 xl:border-b h-full">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Effortless Tool Integrations</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Link your favorite apps and services to streamline work without switching between platforms.</p>
                </div>
                <div className="flex flex-col h-full mx-auto py-4 px-5 justify-center">
                  <Image src="/stats.png" alt="reminder" width={500} height={500} className="border rounded-md shadow-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-1 max-lg:hidden">
            <div className="h-full w-full max-lg:hidden border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 dark:[--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </div>
      </section>

      <section className="flex flex-col border-t lg:pb-0" id="optimize">
        <div className="flex">
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
          <div className="container flex-col lg:border-x items-center mx-auto justify-center px-5 py-10 lg:py-16">
            <div className="inline-flex items-center rounded-md border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm">
              <IconTools className="size-4" />
              <span>Optimize</span>
            </div>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl py-2">Optimize every aspect of your day</h2>
            <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">Achieve seamless productivity with intelligent scheduling, insightful analytics, and effortless integrations.</p>
          </div>
          <div className="relative flex-1 p-1 max-lg:hidden"></div>
        </div>
      </section>

      <section className="flex flex-col lg:pb-0 mb-8 border-y" id="tabs">
        <div className="container flex-col items-center mx-auto justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <button className="relative group">
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping hidden:is-sm"></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="border-l  px-3 h-full">
                <div className="p-5 text-left">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Insightful Performance</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.</p>
                </div>
              </div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping"></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
            </button>
            <button className="relative group">
              <div className="size-1.5 absolute rounded-[1px] -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping"></div>
              <div className="size-1.5 absolute rounded-[1px] -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="border-l px-3 h-full">
                <div className="p-5 text-left">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Unified Scheduling</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.</p>
                </div>
              </div>
              <div className="size-1.5 absolute rounded-[1px] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping"></div>
              <div className="size-1.5 absolute rounded-[1px] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
            </button>
            <button className="relative group">
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping"></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -top-2 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -top-2 -right-1 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="border-x px-3 h-full">
                <div className="px-5 py-4 text-left">
                  <h3 className="text-xl leading-tight tracking-tight md:text-2xl">Effortless Tool Integrations</h3>
                  <p className="text-muted-foreground tracking-[-0.32px] pt-4">Link your favorite apps and services to streamline work without switching between platforms.</p>
                </div>
              </div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-500 ring-1 ring-offset-1 ring-gray-500 group-hover:animate-ping"></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="size-1.5 absolute rounded-[1px] p-0.7 -bottom-0 -right-1 -translate-x-1/2 translate-y-1/2 bg-gray-300 ring-1 ring-offset-1 ring-gray-300" style={{
                background: 'linear-gradient(45deg, rgba(201, 200, 202, 0.4) 0%, rgba(201, 200, 202, 0.4) 25%, transparent 25%, transparent 50%, rgba(201, 200, 202, 0.4) 50%, rgba(201, 200, 202, 0.4)',
                backgroundSize: '40px 40px'
              }}></div>
            </button>
          </div>
        </div >
      </section >



      <section className="flex flex-col separator">
        <div className="flex h-8 gap-1">
          <div className="flex-1 border"></div>
          <div className="h-full w-92 border-2 border-dashed bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:7px_7px] bg-fixed [--pattern-fg:var(--color-gray-950)]/8 dark:[--pattern-fg:var(--color-white)]/10"></div>
          <div className="flex-1 border"></div>
        </div>
      </section>
    </div >
  );
}
