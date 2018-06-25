initSidebarItems({"macro":[["assert_edn_parses_to","`assert_edn_parses_to!` simplifies some of the boilerplate around running a parser function against string input and expecting a certain result."],["assert_parse_failure_contains","`assert_parse_failure_contains!` simplifies running a parser function against string input and expecting a certain failure.  This is working around the complexity of pattern matching parse errors that contain spans."],["assert_parses_to","`assert_parses_to!` simplifies some of the boilerplate around running a parser function against input and expecting a certain result."],["def_matches_keyword","Generate a `satisfy` expression that matches a `Keyword` value with the given name."],["def_matches_namespaced_keyword","Generate a `satisfy` expression that matches a `Keyword` value with the given namespace and name."],["def_matches_plain_symbol","Generate a `satisfy` expression that matches a `PlainSymbol` value with the given name."],["def_parser",""],["keyword_map_of",""],["matches_plain_symbol","Generate a `satisfy_map` expression that matches a `PlainSymbol` value with the given name."],["satisfy_unwrap","`satisfy_unwrap!` makes it a little easier to implement a `satisfy_map` body that matches a particular `Value` enum case, otherwise returning `None`."]],"mod":[["log",""],["macros",""],["value_and_span",""]],"struct":[["ValueParseError","A `ValueParseError` is a `combine::primitives::ParseError`-alike that implements the `Debug`, `Display`, and `std::error::Error` traits.  In addition, it doesn't capture references."]]});