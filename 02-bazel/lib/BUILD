load("@rules_cc//cc:defs.bzl", "cc_library", "cc_test")

cc_library(
    name = "hello-time",
    srcs = ["hello-time.cc"],
    hdrs = ["hello-time.h"],
    visibility = ["//main:__pkg__"],
)

cc_test(
    name = "hello-test",
    srcs = ["hello-test.cc"],
    deps = ["@googletest//:gtest_main"],
)
