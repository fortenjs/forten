# Information for publishers

### Release process

Review and merge PRs into `next` branch. To release a production ready version, you need
to add the commits from `next` to `main` with the following (github web interface does not
work as it makes branches diverge):

```sh
$ git checkout next
$ git pull
$ npm install # make sure any new dependencies are installed
$ npm install --no-save nodegit # needed to test release
$ npm run release -- --dry-run # and check release notes
$ git checkout main
$ git pull
$ git merge --ff-only next
$ git push
```

### Dependencies

Here is the order in which we review and update modules (later modules
depend on all or some of the previous ones). Modules with a \* have 100%
coverage.

1. build\*
2. hooks\*
3. locale\*
4. theme\*
5. story [TODO] 100% coverage
6. styled [TODO] fix stories and tests
7. dragdrop [TODO] improve coverage
8. useragent [TODO] write more tests
9. shortcuts [TODO] write more tests
10. editor [TODO] fix stories, fix tests
11. tree [TODO] 100% coverage
12. tree-view [TODO] 100% coverage (through stories)
