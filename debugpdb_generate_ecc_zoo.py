try:
    import generate_ecc_zoo
except Exception as e:
    import logging
    logger = logging.getLogger(__name__)
    logger.critical("Exception! %s", e, exc_info=True)
    import pdb
    pdb.post_mortem()

    import sys
    sys.exit(2)
