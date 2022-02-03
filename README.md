# Getting Started with React Hugo

## Introduction

This repository offers a highly opinionated way to combine the raw performance of Hugo CMS https://github.com/gohugoio/hugo \
with the endless capabilities of React Javascript Library using https://github.com/facebook/create-react-app

## Overview

The main idea behind this integration is to use Hugo CMS for defining HTML elements
in pages/layouts/partials where React components will be rendered. 

This results in several React applications in the same HTML document allowing for a Multiple Frontend setup that can also be used as a base for a Micro-Frontend architecture

All the above are facilitated by a custom`component` HTML tag

The `id` attribute of the component will be matched with a React Component inside components directory and the component will be rendered inside this container using `ReactDOM.render` creating a separate React Application inside the component HTML element.

## Adding a `component` in Hugo

Hugo CMS uses markdown for editing content, so adding a custom HTML component is not trivial. However there is very simple way that allows adding raw HTML in a markdown document, which is described in details here https://anaulin.org/blog/hugo-raw-html-shortcode/

The main idea is to create a shortcode template by adding a new file layouts/shortcodes/rawhtml.html with content\
` <!-- raw html --> `\
` {{.Inner}} `

This will allow in a page or partial to add the following:\
`{{< rawhtml >}}`\
`<component id="MyComponent"></component>`\
`{{< /rawhtml >}}`

and render our React Component

