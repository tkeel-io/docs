---
sidebar_position: 2
---

# Development Workflow

The following graph shows the workflow how to develop TKeel backend.

## Step 1. Fork

1. Visit https://github.com/tkeel-io/docs
2. Click `Fork` button to create a fork of the project to your GitHub account.

## Step 2. Clone fork to local storage


```bash
git clone https://github.com/$user/docs.git
cd $working_dir/docs
```

## Step 3. Run and test

### Prerequisites

* Install [docusaurus](https://docusaurus.io/zh-CN/docs/installation#running-the-development-server)


### Run docusaurus

```bash
yarn start
```

## Step 4. Push to your fork

When ready to review , push your branch to your fork on GitHub:

```bash
git push -f ${your_remote_name} {your_branch} 
```

## Step 5. Create a PR

- Visit your fork at https://github.com/$user/docs
- Click the` Compare & Pull Request` button next to your myfeature branch.

